import UseEffectHookExample from './UseEffectHookExample';
import UseReducerHookExample from './UseReducerHookExample';
import WithoutContext from './WithoutContext';
import WithContext from './WithContext';
import UseCustomHook from './UseCustomHook';


function HooksExample() {
    const [posts] = UseCustomHook("https://jsonplaceholder.typicode.com/posts");
    const [albums] = UseCustomHook("https://jsonplaceholder.typicode.com/albums");
    const [users] = UseCustomHook("http://localhost:4000/users");

    return (<div className="m-4">
        <h1>Custom Hook Example</h1>

        <h2>List of Users from our own API</h2>
        <ul>
            {
                users.map((user, index) => (
                    <li key={index}>{user.name}</li>
                ))
            }
        </ul>


        <h2>List of Posts</h2>
        <ul>
            {
                posts.map((post, index) => (
                    <li key={index}>{post.title}</li>
                ))
            }
        </ul>

        <h2>List of Albums</h2>
        <ul>
            {
                albums.map((album, index) => (
                    <li key={index}>{album.title}</li>
                ))
            }
        </ul>

        <h1>Builint Hooks Example</h1>
        <WithContext />
        <WithoutContext />
        <UseEffectHookExample />
        <UseReducerHookExample />
    </div>);
}

export default HooksExample;

