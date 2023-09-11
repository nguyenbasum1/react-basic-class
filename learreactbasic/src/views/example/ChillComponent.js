import React from "react";
class ChillComponent extends React.Component {
    state = {
        showJob: false,
    }
    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob,
        })
    }
    render() {
        console.log(`check data input chillcomponent :`, this.props);
        let { job } = this.props;
        let { showJob } = this.state;
        return (
            <>
                {showJob === false && <div><button onClick={() => { this.handleShowHide() }}>Show</button></div>}
                {showJob &&
                    <>
                        <div className="jobList">
                            {
                                job.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title}-{item.salary}
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div><button onClick={() => { this.handleShowHide()}}>Hide</button></div>
                    </>
                }
            </>
        );
    }
}
// khi dùng với hook thì dùng bên dưới function component
// const ChillComponent = (props) => {
//     let { job } = props;
//     return (
//         <>
//             <div>
//             </div>
//             <div className="jobList">
//                 {
//                     job.map((item, index) => {
//                         if(item.salary > 2500)
//                         {
//                             return (
//                             <div key={item.id}>
//                                 {item.title}-{item.salary}$
//                             </div>
//                         );
//                         }   
//                     })
//                 }
//             </div>
//         </>
//     );
// }
export default ChillComponent;