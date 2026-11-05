import { Image, StyleSheet, Text, View } from 'react-native';

export default function App(){
    return (
        <View style={myStyle.container}>
            {/* แสดงข้อความ */}
            <Text style={myStyle.tiile}>Adisak Suaykit</Text>
            {/* แสดงรูป */}
            <Image 
                source={require('@/assets/images/milk.png')}
                style={{
                    width: 200,//กว้าง
                    height: 200,//สูง
                    borderRadius: 24,//โค้งของมุม
                    //borderWidth: 12,//ความกว้าของขอบ
                    //borderColor: "#fff"//สีของขอม
                    }}
                />
                <Image
                    source={{uri:"https://www.grupooneair.com/wp-content/uploads/2022/02/pic-at-the-flight-school-vs-pic-at-an-airline.jpg"}}
                    style={{
                    width: 200,//กว้าง
                    height: 200,//สูง
                    borderRadius: 50,//โค้งของมุม
                    borderWidth: 5,//ความกว้าของขอบ
                    borderColor: "#fff"//สีของขอม
                    }}
                />
                {/* จัดแนวนอน */}
                <View style={{flexDirection: "row"}}>
                    <Text>Cat 🐈</Text>
                    <Text>Dog 🐕</Text>
                    <Text>Duck 🦆</Text>
                    <Text>Brid 🦅</Text>
                    <Text>Fish 🐟</Text>
                </View>
        </View>

    )
}

const myStyle = StyleSheet.create({
    container:{
        backgroundColor: "#c2f2ff", // สีพิ้นหลัง
        flex: 1, //ขยาย
        paddingTop: 80, //ดพิ่มช่องว่างด้านบนกล่อง~
        alignItems: "center",
    },
    tiile:{
        color: "#040404", // สีตัวหนังสือ
        fontSize: 26,
        fontWeight: 500,
        textAlign: "center"
    },
})