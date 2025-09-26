// Grant CesiumJS access to your ion assets
Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkOWI1ZTAyYS0xY2I2LTQ2YzEtOWQ1Yi03ZjA0OGYwN2FmMTUiLCJpZCI6MzQxMjI5LCJpYXQiOjE3NTc4NjI5MTl9.gmvZjoJSOqar_f22dkDwHs2HQBSzFAv40d9RRi5WpYM";

const viewer = new Cesium.Viewer("cesiumContainer");

try {
  const imageryLayer = viewer.imageryLayers.addImageryProvider(
    await Cesium.IonImageryProvider.fromAssetId(4),
  );
  await viewer.zoomTo(imageryLayer);
} catch (error) {
  console.log(error);
}
