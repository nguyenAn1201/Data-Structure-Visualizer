import { Card, CardContent, Divider, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { createStyles, Theme } from '@material-ui/core/styles';

interface LinkedListNodeProps {
    value: number,
}

export const LinkedListNodeComponent: React.FC<LinkedListNodeProps> = ({value}) => {
    const classes = useStyles();

    return (
        <Card square className={classes.root} variant='outlined' >
            <CardContent className={classes.cardContent} >
                <Typography variant="button">Data: {value}</Typography>
            </CardContent>
            <Divider classes={{ root: classes.divider}} orientation='vertical' flexItem/>
            <CardContent className={classes.cardContent} />
        </Card>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            borderWidth: "2px",
            height: theme.spacing(8),
            borderColor: theme.palette.primary.dark,
        },
        cardContent: {
            dispaly: "flex",
            textAlign: "center",
            alignSelf: "center",
        },
        divider: {
            background: theme.palette.primary.dark
        }
    })
)
