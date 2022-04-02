import './App.scss';
// import { Component } from "react";
import { Routes, Route, useNavigate, NavLink } from 'react-router-dom';
import { Button } from "antd";
import Home from 'view/home';
import List from 'view/home/view/list';
import Counter from 'view/counter';
import Detail from 'view/home/view/detail';

function App() {
	// let navigate = useNavigate();

	// function jumpDetail() {
	//   navigate(`/detail/55?type=1`, {state: {key: 1}});
	// }
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} >
					<Route path="list" element={<List />} />
					<Route path="detail">
						<Route index element={
							<main style={{ padding: "1rem" }}>
								<p>没有找到商品！</p>
							</main>
						} />
						<Route path=":id" element={<Detail />} />
					</Route>
					<Route path="counter" element={<Counter />} />
				</Route>
				<Route
					path="*"
					element={
						<main style={{ padding: "1rem" }}>
							<p>没有相关页面!</p>
						</main>
					}
				/>
			</Routes>
			{/* <Button type="primary" onClick={jumpDetail}>跳转</Button>
      <NavLink to="/detail/111?type=222" state={{key: 333}}>跳转</NavLink> */}
		</div>
	);
}

export default App;



/**
 * class的使用方法，利用高阶组件和hook
 */
// function withRouter(Component: any) {
//   return function ComponentWithRouterProp(props: any) {
//     let navigate = useNavigate();
//     return (
//       <Component {...props} router={{navigate}} />
//     )
//   }
// }

// class App extends Component<any, any> {
//   constructor(props: any) {
//     super(props);
//   }
//   jumpDetail() {
//     this.props.router.navigate(`/detail/55?type=1`);
//   }
//   render() {
//     return (
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Home />} >
//             <Route path="list" element={<List />} />
//             <Route path="detail">
//               <Route index element={
//                 <main style={{ padding: "1rem" }}>
//                   <p>没有找到商品！</p>
//                 </main>
//               } />
//               <Route path=":id" element={<Detail />} />
//             </Route>
//           </Route>
//           <Route
//             path="*"
//             element={
//               <main style={{ padding: "1rem" }}>
//                 <p>没有相关页面!</p>
//               </main>
//             }
//           />
//         </Routes>
//         <Button type="primary" onClick={this.jumpDetail.bind(this)}>跳转</Button>
//       </div>
//     );
//   }
// }

// export default withRouter(App)