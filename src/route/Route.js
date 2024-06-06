import Layout from "../components/Layout/Layout";
import HeroPage from "../components/heroPage/HeroPage";
import SingleLayout from "../components/Layout/SingleLayout";
import Registration from "../components/page/Registration";
import Login from "../components/page/Login"
import Login_CareGiver from "../components/caregiver_registration_page/Login_CareGiver"
import Registration_CareGiver from "../components/caregiver_registration_page/Registration"
import GetStartedPage from "../components/page/GetStartedPage"
import StartPageLogIn from "../components/page/StartPageLogIn";
export const Route = [
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<HeroPage/>,
            },

        ]
    },
    {
        path:"/",
        element:<SingleLayout/>,
        children:[
            {
                path:"/register",
                element:<Registration/>,
            },
            {
                path:"/login",
                element:<Login/>,
            },
            {
                path:"/login_CareGiver",
                element:<Login_CareGiver/>,
            },
            {
                path:"/registration_careGiver",
                element:<Registration_CareGiver/>,
            },
            {
                path:"/start_page",
                element:<GetStartedPage/>,
            },
            {
                path:"/login_start_page",
                element:<StartPageLogIn/>,
            }


        ]
    }
]