import { Box, Button, createStyles, makeStyles, TextField, Theme } from "@material-ui/core"
import React from "react"
import { LinkedList } from "../LinkedList/LinkedList"
import { LinkedListNode } from "../LinkedList/LinkedListNode";
import { LinkedListNodeComponent } from "./LinkedListNodeComponent";



export const LinkedListComponent: React.FC = () => {
    const [nodes, setNode] = React.useState<LinkedListNode[]>([]);
    const [linkedList, setLinkedList] = React.useState<LinkedList>(new LinkedList());
    const [nodeValue, setNodeValue] = React.useState<string>("");

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
        linkedList.delete(Number(nodeValue));

        setLinkedList(linkedList);
        setNode(convertLinkedListToArray());
    }

    const convertLinkedListToArray = (): LinkedListNode[] => {
        const arr: LinkedListNode[] = [];

        let currentNode = linkedList.root;
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
                <div id={`${index}`}>
                    return <LinkedListNodeComponent value={node.value} />
                </div>

            })}
        </Box>
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