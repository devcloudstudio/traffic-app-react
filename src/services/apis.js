import axios from "axios";

export default {
  user: {
    register: async function (credentials) {
      try {
        const {
          data: { user },
        } = await axios.post(
          "https://wwww.imsupportclub.com/api/user/signup",
          credentials
        );
        return user;
      } catch (err) {
        console.log(err.message);
      }
    },
    login: async function (credentials) {
      try {
        const {
          data: { user },
        } = await axios.post(
          "https://www.imsupportclub.com/api/user/signin",
          credentials
        );
        return user;
      } catch (err) {
        console.log(err.message);
      }
    },
    getProfileData: async function () {
      try {
        const token = localStorage.getItem("user-token");

        const {
          data: { user },
        } = await axios.get("https://wwww.imsupportclub.com/user/activity/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(user);

        return user;
      } catch (err) {
        console.log(err.message);
      }
    },
    profileUpate: async function (profile) {
      const token = localStorage.getItem("user-token");
      try {
        const {
          data: { user },
        } = await axios.put(
          "https://wwww.imsupportclub.com/api/user/activity/update-profile",
          profile,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        return user;
      } catch (err) {
        throw err;
      }
    },

    brandSaved: async function (brand) {
      const token = localStorage.getItem("user-token");
      try {
        const {
          data: { brands },
        } = await axios.post(
          "https://traffic-application.herokuapp.com/api/user/activity/brands",
          brand,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        return brands;
      } catch (err) {
        console.log(err.message);
      }
    },

    fetchBrands: async function () {
      const token = localStorage.getItem("user-token");
      try {
        const {
          data: { brands },
        } = await axios.get(
          "https://traffic-application.herokuapp.com/api/user/activity/brands",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        return brands;
      } catch (err) {
        console.log(err.message);
      }
    },
    fetchMessages: async function () {
      const token = localStorage.getItem("user-token");
      try {
        const {
          data: { messages },
        } = await axios.get(
          "https://traffic-application.herokuapp.com/api/user/activity/messages",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        return messages;
      } catch (err) {
        console.log(err.message);
      }
    },
    messageSaved: async function (content) {
      const token = localStorage.getItem("user-token");

      try {
        const {
          data: { messages },
        } = await axios.post(
          "https://traffic-application.herokuapp.com/api/user/activity/messages",
          content,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        return messages;
      } catch (err) {
        console.log(err.message);
      }
    },

    fetchLeads: async function () {
      const token = localStorage.getItem("user-token");

      try {
        const { data } = await axios.get(
          "https://www.imsupportclub.com/api/user/activity/leads",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        return data;
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};
