import { Box, Button, createStyles, makeStyles, Snackbar, TextField, Theme, Typography } from "@material-ui/core"
import MuiAlert from '@material-ui/lab/Alert';
import React from "react"
import { LinkedList } from "../LinkedList/LinkedList"
import { LinkedListNode } from "../LinkedList/LinkedListNode";
import { LinkedListNodeComponent } from "./LinkedListNodeComponent";

const ARROW_SVG = <svg width="100" height="70">
        <defs>
            <marker id="arrowhead" markerWidth="4" markerHeight="7"
            refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 3 3.5, 0 7" />
            </marker>
        </defs>
        <line x1="0" y1="50" x2="92" y2="50" stroke="#000"
            strokeWidth="2" markerEnd="url(#arrowhead)" />
    </svg>

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

    const renderArrowSvg = (index: number) => {
        if (index !== 0) {
            return (
                ARROW_SVG
            )
        }
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
                return <React.Fragment key={index}>
                    {renderArrowSvg(index)}
                    {index === 0 ? <Typography variant="h6" style={{alignSelf: "center"}}> HEAD </Typography> : ""}
                    <Box m={2}>
                        <LinkedListNodeComponent value={node.value} />
                    </Box>
                </React.Fragment>
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
        formContainer: {
            display: "flex"
        },
        container: {
            display: "flex",
            flexFlow: "wrap"
        },

        button: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        }
    })
)