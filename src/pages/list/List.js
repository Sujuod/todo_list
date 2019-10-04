import React from 'react';
import { fetchList } from '../../APIs/list.apis';
import { Item } from './Item';
import Logout from '../../common/Logout'
import { AddTask } from './AddTask';
import { changeStatusAPI } from '../../APIs/changeStatusApi';
import { deleteAPI } from '../../APIs/delete.item';
import { addTaskAPI } from '../../APIs/add.task';
import Alert from 'react-bootstrap/Alert'

export class List extends React.Component {
    state = {
        list: []
    }

    componentDidMount() {
        fetchList().then(response => {
            this.setState({
                list: response.data
            })
        })
            .catch(error => {
                console.log(error);
            });
    }

    deleteItem = (item_id) => {
        deleteAPI(item_id).then(response => {
            const filtered_list = this.state.list.filter((item) => (item._id !== item_id))
            this.setState({
                list: filtered_list
            })
        }).catch(error => {
            console.log(error);
        });
    }

    // closure
    handleStatusChange = (index) => (key, item_id) => {
        changeStatusAPI(item_id, Number(key)).then(response => {
            const items_list = [...this.state.list];
            items_list[index] = { ...response.data, _id: item_id };
            this.setState({
                list: [...items_list]
            })
        }).catch(error => {
            console.log(error);
        });
    }

    handleAddTask = (title, description) => {
        if (!title) return;

        addTaskAPI(title, description).then(response => {
            const items_list = [...this.state.list];
            this.setState({
                list: [response.data, ...items_list]
            })
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="wrapper-list">
                <div className="logout">
                    <Logout />
                </div>
                <div className="cards-list">
                    {/* if no tasks found */}
                    {!this.state.list.length ? <Alert variant="primary">You have no tasks</Alert> :
                        <div>
                            {this.state.list.map((item, index) => {
                                const taskInfo = {
                                    name: item.title,
                                    desc: item.description,
                                    status: item.status,
                                    item_id: item._id
                                }
                                return <Item taskInfo={taskInfo} key={item._id} onChangeStatus={this.handleStatusChange(index)} onDeleteItem={this.deleteItem} />;
                            })}
                        </div>
                    }
                </div>
                <div className="app-footer">
                    <AddTask onSaveTask={this.handleAddTask} />
                </div>
            </div >
        );
    }
}


