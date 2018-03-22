interface WebResultServer {
    type: "web";
    source: string;
    data : {
        title: string;
        text: string;
        image: string;
        url: string;
    },
}
