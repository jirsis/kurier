var config = {
    address: "0.0.0.0", 
    port: 3000,
    ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "192.168.0.0/24"],

    language: "es",
    timeFormat: 24,
    units: "metric",

    zoom: 1,

    modules: [
    //modules   
    ]
};
/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}