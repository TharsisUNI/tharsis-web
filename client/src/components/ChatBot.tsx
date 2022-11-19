import React, {Component} from "react";

export class ChatBot extends Component{
    componentDidMount(){
            (function(d, m){
                var kommunicateSettings = 
                    {"appId":"32d853ec11f7ee16d207403de1e1a7afa","popupWidget":true,"automaticChatOpenOnNavigation":true};
                var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
                s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
                var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
                window.kommunicate = m; m._globals = kommunicateSettings;
            })(document, window.kommunicate || {});
        /* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
    }
    render(): React.ReactNode {
        return(
            <>
            </>
        )
    }
}
    
export default ChatBot;