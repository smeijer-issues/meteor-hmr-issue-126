/*
 * It's probably not clear why this goes in lib/_reactHotLoader
 * Since Manta is using the client dir without imports, we don't have any
 * control over load-order, and this file gets loaded first.
 */
import 'react-hot-loader/patch';
console.log('react-hot-loader/patch');
