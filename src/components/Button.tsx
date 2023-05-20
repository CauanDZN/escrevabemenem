import { TouchableOpacity, Text } from "react-native";
import { StyledComponent } from 'nativewind';

export function Button({ ...rest }){
  return (
    <StyledComponent component={TouchableOpacity} {...rest}>
      <TouchableOpacity className="h-14 bg-blue-500 rounded-md items-center justify-center">
        <Text className="text-white font-bold">
          Entrar
        </Text>
      </TouchableOpacity>
    </StyledComponent>
    
  )
}