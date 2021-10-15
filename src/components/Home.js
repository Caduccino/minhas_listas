import MyTasks from './MyTasks';
import CompletedTasks from './CompletedTasks';
import Header from './Header';
function Home() {

    return (
        <>
        <Header />
        <MyTasks />
        <CompletedTasks />
        </>
    )

}

export default Home