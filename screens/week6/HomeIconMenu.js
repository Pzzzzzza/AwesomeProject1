<View style={{ flexDirection: "row", marginTop: 10 }}>
    <MyIcon title="Pokemon" name="bolt" size={30} color="orange" onPress={ ()=>{ navigation.navigate("PokemonTab") }} />
    <MyIcon title="Book Store" name="cubes" size={30} color="orange" onPress={ ()=>{ navigation.navigate("Book") }} />
    <MyIcon title="Location" name="map-marker" size={30} color="orange" onPress={ ()=>{ navigation.navigate("Location") }}  />
    <MyIcon title="More" name="ellipsis-h" size={30} color="orange" />
</View>
