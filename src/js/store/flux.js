const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      contactList: [],
    },
    actions: {
      // obteniendo informacion de la API
      getContacts: async () => {
        try {
          const response = await fetch(
            "https://playground.4geeks.com/contact/agendas/lisandropiatti/contacts"
          );
          if (response.ok) {
            const dataContacts = await response.json();
            setStore({ contactList: dataContacts.contacts });
            console.log(dataContacts);
          }
          if (response.status == 404) {
            try {
              const createSlug = async () => {
                const response = await fetch(
                  "https://playground.4geeks.com/contact/agendas/lisandropiatti",
                  {
                    method: "POST",
                  }
                );
              };
              createSlug();
            } catch (error) {
              console.error(`error creating slug ---> ${error}`);
            }
          }
        } catch (error) {
          console.error(`getting contacts error ---> ${error}`);
        }
      },

      // agregar un contacto
      addContact: async (dataForm) => {
        try {
          const response = await fetch(
            "https://playground.4geeks.com/contact/agendas/lisandropiatti/contacts",
            {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({
                name: dataForm.name,
                phone: dataForm.phone,
                email: dataForm.email,
                address: dataForm.address,
              }),
            }
          );
          if (response.ok) {
            const data = await response.json();
            console.log(data);
            setStore((prevState) => [...prevState, data]);
          }
        } catch (error) {
          console.error(`adding contact error ---> ${error}`);
        }
      },

      // eliminar un contacto
      deleteContact: async (id) => {
        const store = getStore();
        try {
          const response = await fetch(
            `https://playground.4geeks.com/contact/agendas/lisandropiatti/contacts/${id}`,
            {
              method: "DELETE",
            }
          );
          if (response.ok) {
            setStore({
              contactList: store.contactList.filter(
                (contact) => contact.id != id
              ),
            });
          }
        } catch (error) {
          console.error(`error contact delete ---> ${error}`);
        }
      },

      // editar un contacto
      editContact: async (contact, id) => {
        const store = getStore();
        const actions = getActions();

        try {
          const response = await fetch(
            `https://playground.4geeks.com/contact/agendas/lisandropiatti/contacts/${id}`,
            {
              method: "PUT",
              body: JSON.stringify(contact),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          if (response.ok) {
            actions.getContacts();
            return true;
          }
          return false;
        } catch (error) {
          console.error("Error", error);
          return false;
        }
      },

      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
