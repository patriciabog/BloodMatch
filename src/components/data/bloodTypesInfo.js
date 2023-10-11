const bloodTypesInfo = [
    {
        type: "A+",
        donate: ["A+", "AB+"],
        receive: ["A+", "A-", "O+", "O-"],
    },
    {
        type: "A-",
        donate: ["A+", "A-", "AB+", "AB-"],
        receive: ["A-", "O-"],
    },
    {
        type: "B+",
        donate: ["B+", "AB+"],
        receive: ["B+", "B-", "O+", "O-"],
    },
    {
        type: "B-",
        donate: ["B+", "B-", "AB+", "AB-"],
        receive: ["B-", "O-"],
    },
    {
        type: "AB+",
        donate: ["AB+"],
        receive: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    {
        type: "AB-",
        donate: ["AB+", "AB-"],
        receive: ["A-", "B-", "AB-", "O-"],
    },
    {
        type: "O+",
        donate: ["A+", "B+", "AB+", "O+"],
        receive: ["O+", "O-"],
    },
    {
        type: "O-",
        donate: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        receive: ["O-"],
    },
];

export default bloodTypesInfo;