const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            email: "",
            password: "",
            username: "",
            name: "",
            cart: [],
            current_user: null,
			access_token: null,
            error:""
        },
        actions: {

            login: async (credentials) => {
				try {
					const { url } = getStore();
					const options = {
						method: 'POST',
						body: JSON.stringify(credentials),
						headers: {
							'Content-type': 'application/json'
						}
					};

					const response = await fetch(`http://127.0.0.1:5000/login`, options);
					const data = await response.json();

					if (data.msg) {
						console.log(data);
						

					} else {
						console.log(data);

						const { access_token, user } = data;
						setStore({
							access_token: access_token,
							current_user: user,
							email: '',
							password: '',
						});
						sessionStorage.setItem('access_token', access_token);
						sessionStorage.setItem('current_user', JSON.stringify(user));
						
					}

				} catch (error) {
					console.log(error.message);
				}

			},
            signUp: async (credenciales) => {
				try {
					const { url } = getStore()
					const option = {
						method: 'POST',
						body: JSON.stringify(credenciales),
						headers: {
							'Content-type': 'application/json'
						}
					}

					const response = await fetch(`http://127.0.0.1:5000/signup`, option)
					const datos = await response.json()
					const { cancelForm } = getActions()
					if (datos.msg) {
						console.log(datos)
						
					} else {
						console.log(datos)

						
						const { access_token, user } = datos.datos;
						setStore({
							access_token: null,
							current_user: user,
							email: '',
							password: '',
							username: '',
                            name:''
						});
						
						sessionStorage.setItem('current_user', JSON.stringify(user));
						cancelForm()
					}

				} catch (error) {
					console.log(error.message)
				}

			},

            cancelForm: () => {
				
				setStore({
					email: "",
					password: "",
				});
			},
            handleFormChange: (e) => {
				const { name, value } = e.target
				setStore({
					[name]: value
				})
			},
            handleRegister: (e) => {
				e.preventDefault();
				const { name, email, password, username, repeatPassword } = getStore()
				const { signUp } = getActions();
				signUp({ email, password, name, username, repeatPassword });
			},
            logout: () => {
				if (sessionStorage.getItem('access_token')) {
					setStore({
						access_token: null,
						current_user: null,
						email: '',
						password: ''
					})
					sessionStorage.removeItem('access_token')
					sessionStorage.removeItem('current_user')

				}
			},
			getPrs: () => {

			},
			getSolar: () => {},
			getChapman: () => {}
            

        }
    }
}



export default getState