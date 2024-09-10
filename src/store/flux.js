import { toast } from "react-toastify";

const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			email: "",
			password: "",
			username: "",
			name: "",
			address: "",
			users: [],
			cart: [],
			current_user: null,
			access_token: null,
			error: "",
			guitars: null,
			guitarId: null,
			total: null,
			order: null,
			orders: []
		},
		actions: {

			login: async (credentials) => {
				try {
					const { url } = getStore()
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
						toast.error(data.msg)

					} else {
						console.log(data);
						toast.success(data.success)
						const { access_token, user } = data.datos;
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
						toast.error(datos.msg)

					} else {
						console.log(datos)
						toast.success(datos.success)

						const { access_token, user } = datos.datos;
						setStore({
							access_token: access_token,
							current_user: user,
							email: '',
							password: '',
							username: '',
							name: '',
							address: ''
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
				const { name, email, password, username, repeatPassword, address } = getStore()
				const { signUp } = getActions();
				signUp({ email, password, name, username, repeatPassword, address });
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
					toast.success("Log Out Successfull")
				}
			},
			getStrat: async () => {
				try {
					const url = 'http://127.0.0.1:5000/getstrat';
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
			getTele: async () => {
				try {
					const url = 'http://127.0.0.1:5000/getsg';
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
			getSg: async () => {
				try {
					const url = 'http://127.0.0.1:5000/getsg';
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
			getGuitarId: async (guitarId, navigate) => {
				try {
					const url = `http://127.0.0.1:5000/getguitarid/${guitarId}`;
					const options = {
						method: "GET",
						headers: { 'Content-Type': 'application/json' }
					}

					const response = await fetch(url, options)
					const datos = await response.json()
					setStore({ guitarId: datos })
					navigate(`/guitar/${guitarId}`)
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
			addItem: (id) => {
				const { access_token } = getStore();
				if (!access_token) {
					toast.error("You must be logged in to use the Store");
					return; // Detener la ejecución si no hay token
				}
			
				const url = `http://127.0.0.1:5000/cart/add/${id}`;
				const options = {
					method: "POST",
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + access_token
					},
				};
			
				fetch(url, options)
					.then(response => {
						if (!response.ok) {
							// Si el estado es 401, mostrar el mensaje de no autenticado
							if (response.status === 401) {
								toast.error("You must be logged in");
							}
							throw new Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						if (data.success) {
							console.log('Response from addItem:', data);
							setStore({ cart: data });
							toast.success("Product added to cart successfully");
						} else if (data.msg) {
							toast.error(data.msg);
						}
					})
					.catch(error => console.error('Error adding to cart:', error));
			},
			

			decreaseItem: (id) => {
				const { access_token } = getStore();

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
					.then(data => {
						if (data.success) {
							setStore({ cart: data });
						} else { data.msg }

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
						console.log('Response from deleteItem:', data);
						setStore({ cart: data });
						toast.error("Item was deleted from your Cart")
					})
					.catch(error => {

						console.error(error.message);
					});
			},

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
					console.log(datos.success)
					
				} catch (error) {
					console.log(error.message)
				}

			},
			searchItem: async (itemName, navigate) => {
				try {
					const options = {
						method: 'POST',
						body: JSON.stringify({ search_term: itemName }),
						headers: {
							'Content-type': 'application/json'
						}
					};

					const response = await fetch(`http://127.0.0.1:5000/search`, options);
					const datos = await response.json();

					if (response.ok) {
						setStore({ guitars: datos });
						navigate("/searchresults");
					} else {
						console.log(datos || "Error desconocido en la búsqueda");
					}

				} catch (error) {
					console.log(error.message);
				}
			},
			createOrder: async (navigate) => {
				const { access_token } = getStore();
				try {
					const options = {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': 'Bearer ' + access_token
						}
					};

					const response = await fetch('http://127.0.0.1:5000/order', options);
					const data = await response.json();

					if (response.ok) {
						console.log("Order created successfully:", data.order);
						setStore({ order: data.order });
						navigate("/order");

					} else {
						console.log("Error:", data.msg);
					}
				} catch (error) {
					console.error("Error creating order:", error.message);
				}
			},
			createOrder1: async (navigate) => {
				const { access_token } = getStore();
				console.log("Starting createOrder function");
				try {
					const options = {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': 'Bearer ' + access_token
						}
					};

					console.log("About to send fetch request");
					const response = await fetch('http://127.0.0.1:5000/order', options);
					console.log("Received response", response);
					const data = await response.json();

					if (response.ok) {
						console.log("Order created successfully:", data.order);
						const orderId = data.order.id; // Obtén el ID de la orden
						setStore({ order: data.order });
						navigate(`/order/${orderId}`); // Incluye el ID en la URL
						return orderId;
					} else {
						console.log("Error:", data.msg);
					}
				} catch (error) {
					console.error("Error creating order:", error.message);
				}
			},
			getAllOrders: async () => {
				try {
					const { access_token } = getStore();
					const url = 'http://127.0.0.1:5000/userorders';
					const options = {
						method: "GET",
						headers: {
							'Content-Type': 'application/json',
							'Authorization': 'Bearer ' + access_token
						},
					};

					const response = await fetch(url, options);

					// Verificar si la respuesta fue exitosa
					if (!response.ok) {
						const errorData = await response.json();
						console.log('Error:', errorData.msg || 'Failed to fetch user orders');
						return;  // Salir de la función en caso de error
					}

					const datos = await response.json();

					// Verificar que 'datos' es lo que esperas (por ejemplo, un objeto con la clave 'order')
					if (datos && datos.order) {
						setStore({ orders: datos });
						console.log(datos.order);
					} else {
						console.log('Unexpected response data:', datos);
					}
				} catch (error) {
					console.log('Network or other error:', error.message);
				}
			},
			getFullOrders: async () => {
				const { access_token } = getStore();
				try {
					const url = 'http://127.0.0.1:5000/userorders';
					const options = {
						method: "GET",
						headers: {
							'Content-Type': 'application/json',
							'Authorization': 'Bearer ' + access_token
						}
					}

					const response = await fetch(url, options)
					const datos = await response.json()
					setStore({ orders: datos })
					console.log(datos)
				} catch (error) {
					console.log(error.message)
				}

			},

			fetchOrderDetails: async (orderId, navigate) => {
				const { access_token } = getStore();


				try {
					const response = await fetch(`http://127.0.0.1:5000/order/${orderId}`, {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${access_token}`
						}
					});

					if (response.ok) {
						const data = await response.json();
						setStore({ order: data.order });
						navigate(`/order/${orderId}`);
					} else {
						const data = await response.json();
						console.log("Error fetching order details:", data.msg);
					}
				} catch (error) {
					console.error("Error fetching order details:", error.message);
				}
				return null;
			},
			fetchPayedOrderDetails: async (orderId) => {
				const { access_token } = getStore();


				try {
					const response = await fetch(`http://127.0.0.1:5000/order/${orderId}`, {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${access_token}`
						}
					});

					if (response.ok) {
						const data = await response.json();
						setStore({ order: data.order });
						
					} else {
						const data = await response.json();
						console.log("Error fetching order details:", data.msg);
					}
				} catch (error) {
					console.error("Error fetching order details:", error.message);
				}
				return null;
			},
			deleteOrder: (id) => {
				const { access_token } = getStore()
				const url = `http://127.0.0.1:5000/delete/order/${id}`
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
						console.log('Response from deleteItem:', data);
						setStore({ orders: data })
					})
					.catch(error => {

						console.error(error.message);
					});
			},

			getAllUsers: async () => {
				const { access_token } = getStore()
				try {
					const url = 'http://127.0.0.1:5000/admin/users';
					const options = {
						method: "GET",
						headers: {
							'Content-Type': 'application/json',
							'Authorization': 'Bearer ' + access_token
						}
					}

					const response = await fetch(url, options)
					const datos = await response.json()
					setStore({ users: datos.users })
				} catch (error) {
					console.log(error.message)
				}

			},
			searchUser: async (searchTerm) => {
				try {
					const { access_token } = getStore()
		
				  const response = await fetch('http://127.0.0.1:5000/admin/search_user', {
					method: 'POST',
					headers: {
					  'Content-Type': 'application/json',
					  'Authorization': `Bearer ${access_token}` 
					},
					body: JSON.stringify({
					  search_term: searchTerm
					})
				  });
		
				  if (!response.ok) {
					const errorData = await response.json();
					console.error('Error searching user:', errorData);
					return;
				  }
		
				  const data = await response.json();
				  setStore({ users: data.users });  
				} catch (error) {
				  console.error('Error in fetch searchUser:', error);
				}
			  },
			  clearStoreUsers: () => {
				setStore({users:[]})
			  },
			  getUserOrders: async (userId,navigate) => {
				const { access_token } = getStore()
				try {
				  const token = localStorage.getItem("token"); // Obtener el token JWT si es necesario
		
				  const response = await fetch(`http://127.0.0.1:5000/admin/user_orders/${userId}`, {
					method: 'GET',
					headers: {
					  'Content-Type': 'application/json',
					  'Authorization': `Bearer ${access_token}` 
					}
				  });
		
				  if (!response.ok) {
					const errorData = await response.json();
					console.error('Error fetching user orders:', errorData);
					return;
				  }
		
				  const data = await response.json();
				  setStore({ userOrders: data.orders });
				  navigate(`/userorders/${userId}`)  
				} catch (error) {
				  console.error('Error in fetch getUserOrders:', error);
				}
			  },
			 
			  AdminDeleteOrder: (orderId, userId) => {
				const { access_token } = getStore()
				const url = `http://127.0.0.1:5000/admin/order/${orderId}/${userId}`
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
						console.log('Response from deleteItem:', data);
						setStore({ userOrders: data.orders })
					})
					.catch(error => {

						console.error(error.message);
					});
			},





		}
	}
}



export default getState