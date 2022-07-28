import { View, Text, Image,StyleSheet,useWindowDimensions,ScrollView } from 'react-native'
import React,{useState} from 'react'
import logo from '../../../assets/images/free_logo.png'
import CustomInput from '../../components/customInput/CustomInput'
import CustomButton from '../../components/customInput/customButton/CustomButton'
const SignInScreen = () => {
  
    const [username,setUserName] = useState('');
    const [password,setPasword] = useState('');
    const {height} = useWindowDimensions();

    const onSignInPressed = () =>{
        console.warn("Sign In");
    }
    const onForgotPassword = () =>{
        console.warn("Forgot Password");
    }
    const onSignInFacebook = () =>{
        console.warn("Sing In with Facebook");
    }
    const onSignInGoogle = () =>{
        console.warn("Sign In with Google");
    }
    const onSignInGithub = () =>{
        console.warn("Sign In with Github");
    }
    const onSingUpPress = () =>{
        console.warn("Sign Up");
    }
    return (
    <ScrollView showsVerticalScrollIndicator={false}> 
        <View style={styles.root}>
        <Image source={logo} style={[styles.logo, {height:height*0.3}]} resizeMode='contain'/>

        <CustomInput placeholder="username" value={username} setValue={setUserName}/>
        <CustomInput placeholder="Password" value={password} setValue={setPasword} secureTextEntry={true}/>

        <CustomButton text="Sign In" onPress={onSignInPressed} />
        <CustomButton text="Forgot Password" onPress={onForgotPassword} type="TERTIARY"/>

        <CustomButton text="Sing In with Facebook" onPress={onSignInFacebook} bgColor="#E7EAF4" fgColor="#4765A9" />
        <CustomButton text="Sign In with Google" onPress={onSignInGoogle} bgColor="#FAE9EA" fgColor="#DD4D44" />
        <CustomButton text="Sign In with Github" onPress={onSignInGithub} bgColor="#e3e3e3" fgColor="#363636"/>

        <CustomButton text="Don't have an account? Create One" onPress={onSingUpPress} type="TERTIARY"/>
        </View>
    </ScrollView>
  )

}

const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        padding:20,
    },
    logo:{
        width:'70%',
        maxWidth:300,
        maxHeight:200,
    }
})

export default SignInScreen