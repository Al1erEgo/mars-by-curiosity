import { Animated, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { pictureStyles as styles } from './styles';
import NavBar from '../../../components/navbar';
import { createRef, useRef, useState } from 'react';
import { PanGestureHandler, PinchGestureHandler, State } from 'react-native-gesture-handler';

const Picture = () => {
  const [panEnabled, setPanEnabled] = useState(false);

  const { photo, photoId } = useLocalSearchParams();

  const scale = useRef(new Animated.Value(1)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  const pinchRef = createRef();
  const panRef = createRef();

  const onPinchEvent = Animated.event(
    [
      {
        nativeEvent: { scale },
      },
    ],
    { useNativeDriver: true }
  );

  const onPanEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );

  // @ts-ignore
  const handlePinchStateChange = ({ nativeEvent }) => {
    // enabled pan only after pinch-zoom
    if (nativeEvent.state === State.ACTIVE) {
      setPanEnabled(true);
    }

    // when scale < 1, reset scale back to original (1)
    const nScale = nativeEvent.scale;
    if (nativeEvent.state === State.END) {
      if (nScale < 1) {
        Animated.spring(scale, {
          toValue: 1,
          useNativeDriver: true,
        }).start();
        Animated.spring(translateX, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
        }).start();

        setPanEnabled(false);
      }
    }
  };

  return (
    //Without zoom
    // <View style={[styles.container]}>
    //     <NavBar backButton saveButton invert title={photoId as string} secondaryTitleFirst='Photo ID' shareImgUrl={photo as string}/>
    //     <Image style={[styles.image]} source={photo as string} contentFit='cover'/>
    // </View>
    <View style={[styles.container]}>
      <NavBar
        backButton
        saveButton
        invert
        title={photoId as string}
        secondaryTitleFirst="Photo ID"
        shareImgUrl={photo as string}
      />
      <View style={[styles.image]}>
        <PanGestureHandler
          onGestureEvent={onPanEvent}
          ref={panRef}
          simultaneousHandlers={[pinchRef]}
          enabled={panEnabled}
          failOffsetX={[-1000, 1000]}
          shouldCancelWhenOutside>
          <Animated.View>
            <PinchGestureHandler
              ref={pinchRef}
              onGestureEvent={onPinchEvent}
              simultaneousHandlers={[panRef]}
              onHandlerStateChange={handlePinchStateChange}>
              <Animated.Image
                source={{ uri: photo as string }}
                style={{
                  borderRadius: 10,
                  width: '100%',
                  height: '100%',
                  transform: [{ scale }, { translateX }, { translateY }],
                }}
                resizeMode="cover"
              />
            </PinchGestureHandler>
          </Animated.View>
        </PanGestureHandler>
      </View>
    </View>
  );
};

export default Picture;
