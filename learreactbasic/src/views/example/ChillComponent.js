import React from "react";
class ChillComponent extends React.Component {
    
    render() {
        console.log(`check data input chillcomponent :`,this.props);
        let {firstName, lastName, job} = this.props;
        return (
            <>
                <div>
                    <p>text input data - {firstName} - {lastName}</p>
                </div>
                <div className="jobList">
                    {
                        job.map((item,index)=>{
                            return(
                                <div key={item.id}>
                                    {item.title}-{item.salary}
                                </div>
                            );
                        })
                    }
                </div>
            </>
        );
    }
}
export default ChillComponent;