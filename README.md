# Usando React Navigation - Stack

Inicialmente, tive uns probleminhas pra mexer nessa dependência. Mas vai na minha, q vc passa de ano!

- Adicione a dependência ``react-navigation`` completa
- Adicione as dependências ``react-native-gesture-handler`` e ``react-native-reanimated``
- Localize o arquivo `android/app/src/main/java/com/usingnavigation/MainActivity.java` e adicione as seguintes linhas após o `import com.facebook.react.ReactActivity;`:
  
  ```
  import com.facebook.react.ReactActivityDelegate;
  import com.facebook.react.ReactRootView;
  import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
  ```

- Ainda no mesmo arquivo, adicione o seguinte método à classe `ReactActivity`:

  ```
    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
      return new ReactActivityDelegate(this, getMainComponentName()) {
        @Override
        protected ReactRootView createRootView() {
         return new RNGestureHandlerEnabledRootView(MainActivity.this);
        }
      };
    }

  ```
