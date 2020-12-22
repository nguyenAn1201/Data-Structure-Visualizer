import { Box, Card, CardContent, Divider, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useTheme } from '@material-ui/core/styles';

export const LinkedListNode: React.FC<{value: number, nextPref: number}> = ({value, nextPref}) => {
    const theme = useTheme();
    const useStyles = makeStyles({
        root: {
            maxWidth: "160px",
            backgroundColor: theme.palette.primary.light,
        },
        cardContent: {
            dispaly: "flex",
            textAlign: "center",

        }
    })
    const classes = useStyles();

    return (
        <Box m={2}>
            <Card square className={classes.root}>
                <CardContent className={classes.cardContent}>
                    <Typography variant="button">Data: {value}</Typography>
                </CardContent>
                <Divider/>
                <CardContent className={classes.cardContent}>
                    <Typography variant="button">Next Pref: {nextPref}</Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

