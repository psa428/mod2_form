export function checkPassword(str, setIsValid, setErrMessage){
    /*
    *   Проверка login
    */
     
     let newError = null;
     const regexp = /^\w+[!$~#&]/;
     

     if (!regexp.test(str)) {
         newError = 'Пароль должен содержать буквы, цифры и спецсимволы';
     } else if (str.length < 8) {
         newError = 'Длина пароля должна быть не менее 8 символов';   
     };
     
     setErrMessage(newError);
     if (newError) {
        
        setIsValid(false);
     };   
};