# Platform API

`import { Platform } from 'react-native';`
`Platform.OS === 'android' ? something : something else`

this is a way to check if the current platform is android or ios

`Platform.select({ios: value1 , android: value2})`

setting a value based on platform

# Platform specific files

- copy any component and rename one instance as `[component].android.js` and second one as `[component].ios.js`
- import as `import component from 'location/component';`
