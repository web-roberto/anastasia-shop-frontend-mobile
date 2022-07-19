## to publish my app to everybody - v 95

1. cd my project
2. expo login -u robertoalonso -p A...
3. expo publish -> copy de long url
4. en expo.io -> refresh the page, choose the project on the left, Setting. Project privacy.Public
5. She has to install in App Store: Expo go
6. Send by email the long url published. and tell the client to install EXPO GO (in the page open with he links choose 'Open in Expo Go' -> register if necessary)

### libraries added:

- react-native-safe-area-context
  -native-base
  -react-native-svg

LA SOLUCION AL SUPERERROR ES INTALAR EN package.json -> "react-native": "0.68.2",

    dice de instalar el "native-base": "2.8.2", pero ahora esta  "native-base": "^2.15.2"(CON ESTE VA BIEN)
    "react-native":"0.68.2" en package.json
    uso el NMP 16.12.0 (la mas bajita de la 16)

    El fichero ignoreWarnings.js -> no salen los warnings por pantalla del cliente
