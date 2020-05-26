import {Alert, Button, CardColumns, Input, InputGroup, InputGroupAddon} from "reactstrap";
import React, {useRef} from "react";
import Post from "./Post";
import Loading from "../Shared/Loading";

export default ({items, onFetch, error, loading}) => {
    const {posts} = items;
    const searchForm = useRef("");
    return (
        <div className="p-5">
            <div className="m-auto" style={{width: "400px"}}>
                {!!error && (
                    <Alert color="danger">
                        {error}
                    </Alert>
                )}
                <div className="mb-3 w-100">
                    <form ref={searchForm}>
                        <InputGroup>
                            <Input placeholder="Enter fetch url here" name="search"/>
                            <InputGroupAddon addonType="append"><Button onClick={() => onFetch(searchForm.current["search"].value)}>Fetch</Button></InputGroupAddon>
                        </InputGroup>
                    </form>
                </div>
            </div>
            {loading ? <Loading /> : <CardColumns>
                {posts && posts.map((post, i) => <Post key={i} data={post}/>)}
            </CardColumns>}
        </div>
    )
};
