import { useRouter} from "next/router";

function Apply() {
 const router = useRouter();
    return ( 
        <body>
            <div>
                <h1>apply  id :{router.query.id}</h1>
            </div>
        </body>
     );
}

export default Apply;