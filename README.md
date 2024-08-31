# Mapa

### Documentações

- [leaflet](https://leafletjs.com/)
- [React leaflet](https://react-leaflet.js.org/)

## Instalando pacotes

```bash
$ npm install || npm i
```

## Iniciando a aplicação

```bash
$ npm run dev
```

## Exemplo componente Mapa

```js
<MapContainer className="map-container" center={[0, 0]} zoom={12}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
</MapContainer>
```

## Exemplo componente Marcador

```js
<MapContainer>
  <TileLayer />
  <Marker position={[0, 0]}></Marker>
</MapContainer>
```

## Exemplo componente Popup

```js
<MapContainer>
  <TileLayer />
  <Marker>
    <Popup>Texto</Popup>
  </Marker>
</MapContainer>
```
