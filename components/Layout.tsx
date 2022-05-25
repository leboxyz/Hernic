import Header from "./Header";

function Layout({children}:any) {
    return ( 
        <html>
            <Header/>
            <main className="p-5 flex items-center max-w-6xl mx-auto">
                {children}
            </main>
        </html>
     );
}

export default Layout;