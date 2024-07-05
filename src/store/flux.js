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
            error:"",
			guitars: null,
			guitarId: null
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
			getPrs: async () => {
				try {
					const url = 'http://127.0.0.1:5000/getprs';
					const options = {
						method: "GET",
						headers: { 'Content-Type': 'application/json' }
					}

					const response = await fetch(url, options)
					const datos = await response.json()
					setStore({ guitars: datos })
				} catch (error) {
					console.log(error.message)
				}

			},
			getSolar: async () => {
				try {
					const url = 'http://127.0.0.1:5000/getsolar';
					const options = {
						method: "GET",
						headers: { 'Content-Type': 'application/json' }
					}

					const response = await fetch(url, options)
					const datos = await response.json()
					setStore({ guitars: datos })
				} catch (error) {
					console.log(error.message)
				}

			},
			getChapman: async () => {
				try {
					const url = 'http://127.0.0.1:5000/chapman';
					const options = {
						method: "GET",
						headers: { 'Content-Type': 'application/json' }
					}

					const response = await fetch(url, options)
					const datos = await response.json()
					setStore({ guitars: datos })
				} catch (error) {
					console.log(error.message)
				}

			},
			getGuitarId: async () => {
				try {
					const url = `http://127.0.0.1:5000/getguitarid/${id}`;
					const options = {
						method: "GET",
						headers: { 'Content-Type': 'application/json' }
					}

					const response = await fetch(url, options)
					const datos = await response.json()
					setStore({ guitarId: datos })
				} catch (error) {
					console.log(error.message)
				}

			},
			getAllGuitars: async () => {
				try {
					const url = 'http://127.0.0.1:5000/getall';
					const options = {
						method: "GET",
						headers: { 'Content-Type': 'application/json' }
					}

					const response = await fetch(url, options)
					const datos = await response.json()
					setStore({ guitars: datos })
				} catch (error) {
					console.log(error.message)
				}

			},
			addItem:  (id) => {
				const { access_token } = getStore()
				const url = `http://127.0.0.1:5000/cart/add/${id}`;
				const options = {
					method: "POST",
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + access_token
					},
					
				};

				fetch(url, options)
					.then(response => response.json())
					.then(datos => {


						console.log('Item Added to Cart', datos);
						
					})
					.catch(error => console.error('Error adding to cart:', error));
				
			},
			decreaseItem:  (id) => {
				const { access_token } = getStore()
				const url = `http://127.0.0.1:5000/cart/item/${id}/decrement`;
				const options = {
					method: "POST",
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + access_token
					},
					
				};

				fetch(url, options)
					.then(response => response.json())
					.then(datos => {


						console.log('Item Decreased ', datos);
						
					})
					.catch(error => console.error('Error decreasing item in cart:', error));
				
			},
			deleteItem: (id) => {
				const { access_token } = getStore()
				const url = `http://127.0.0.1:5000/cart/remove/${id}`
				const options = {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + access_token
					}
				}
				fetch(url, options)
					.then(response => {
						return response.json();
					})
					.then(data => {
					})
					.catch(error => {

						console.error(error.message);
					});
			},
			clearCart: () => {},
			getCart: async () => {
				try {
					const { access_token } = getStore()
					const url = 'http://127.0.0.1:5000/cart';
					const options = {
						method: "GET",
						headers: {
							'Content-Type': 'application/json',
							'Authorization': 'Bearer ' + access_token
						},
					}

					const response = await fetch(url, options)
					const datos = await response.json()
					setStore({ cart: datos })
				} catch (error) {
					console.log(error.message)
				}

			}
			
        }
    }
}



export default getState