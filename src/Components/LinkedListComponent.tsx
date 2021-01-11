import { Box, Button, createStyles, makeStyles, Snackbar, TextField, Theme } from "@material-ui/core"
import MuiAlert from '@material-ui/lab/Alert';
import React from "react"
import { LinkedList } from "../LinkedList/LinkedList"
import { LinkedListNode } from "../LinkedList/LinkedListNode";
import { LinkedListNodeComponent } from "./LinkedListNodeComponent";

export const LinkedListComponent: React.FC = () => {
    const [nodes, setNode] = React.useState<LinkedListNode[]>([]);
    const [linkedList, setLinkedList] = React.useState<LinkedList>(new LinkedList());
    const [nodeValue, setNodeValue] = React.useState<string>("");

    const valid = {isError: false, errorMessage: ""};
    const [error, setError] = React.useState<{isError: boolean, errorMessage: string}>(valid);

    const handleFieldChange = (value: string) => {
        setNodeValue(value);
    }

    const handleInsertStart = () => {
        linkedList.insertToStart(Number(nodeValue));

        setLinkedList(linkedList);
        setNode(convertLinkedListToArray());
    }

    const handleInsertToEnd = () => {
        linkedList.insertToEnd(Number(nodeValue));

        setLinkedList(linkedList);
        setNode(convertLinkedListToArray());
    }

    const handleDelete = () => {
        try {
            linkedList.delete(Number(nodeValue));
            setLinkedList(linkedList);
            setNode(convertLinkedListToArray());
        } catch(e) {
            setError({isError: true, errorMessage: e.toString()});
        }
    }

    const convertLinkedListToArray = (): LinkedListNode[] => {
        const arr: LinkedListNode[] = [];

        let currentNode = linkedList.head;
        while (currentNode !== null) {
            arr.push(currentNode);
            currentNode = currentNode.nextNode!;
        }
        return arr;
    }

    const classes = useStyles();
    return <React.Fragment>
        <form className={classes.formContainer}>
            <Box m={2}>
                <TextField label="Value" variant="outlined" size="small" type="number" onChange={(e) => handleFieldChange(e.target.value)} value={nodeValue}/>
                <Button variant="contained" color="primary" className={classes.button} onClick={handleInsertStart}>Insert node to start</Button>
                <Button variant="contained" color="primary" className={classes.button} onClick={handleInsertToEnd}>Insert node to end</Button>
                <Button variant="contained" color="secondary" className={classes.button} onClick={handleDelete}>Delete node</Button>
            </Box>
        </form>
        <Box m={2} className={classes.container}>
            {nodes.map((node, index) => {
                return <div id={`${index}`}>
                    <LinkedListNodeComponent value={node.value} />
                </div>
            })}
        </Box>
        <Snackbar open={error.isError} autoHideDuration={5000} onClose={() => setError(valid)}>
            <MuiAlert elevation={6} variant="filled" severity="error">
                {error.errorMessage}
            </MuiAlert>
        </Snackbar>
    </React.Fragment>
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: "flex"
        },
        formContainer: {
            display: "flex"
        },
        button: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        }
    })
)