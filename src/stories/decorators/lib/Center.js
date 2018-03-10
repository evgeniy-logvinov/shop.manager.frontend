export default () => ({
  render (h) {
    return (
    <v-app dark>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'auto'
      }}>
      <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet"/>
        <div style={{
          margin: 'auto'
        }}>
          <story/>
        </div>
      </div>
    </v-app>
    )
  }
})
