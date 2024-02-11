import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteGoal, editMyGoal } from "../Reducers/goalsReducer";
import toast, { Toaster } from "react-hot-toast";
const MyGoals = () => {
  const { goals } = useSelector((state) => state.goals);
  const [editGoal, setEditGoal] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const dispatch=useDispatch()
  const handleEditGoal = (goal, btnText) => {
    setIsEdit(!isEdit);
    setEditGoal(goal.goal);
    
    if (btnText === "Save" && editGoal) {
      const editedGoal = {
        id: goal.id,
        goal: editGoal,
      };

      dispatch(editMyGoal(editedGoal));
      toast("Success", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      setIsEdit(!isEdit)
      setEditGoal("")
    }
  };

  return (
    <VStack marginTop="1rem">
      {goals.length > 0 &&
        goals?.map((goal) => (
          <FormControl key={goal.id}>
            <Box display="flex" gap="5px">
              {isEdit ? (
                <Input
                  value={editGoal}
                  onChange={(e) => setEditGoal(e.target.value)}
                />
              ) : (
                <Input
                  readOnly
                  value={goal.goal}
                  onChange={(e) => setEditGoal(e.target.value)}
                />
              )}

              <ButtonGroup>
                <Button
                  colorScheme="green"
                  onClick={() => handleEditGoal(goal, !isEdit? "Edit":"Save")}
                >
                  {isEdit ? "Save" : "Edit"}
                </Button>
                <Button
                onClick={()=>{
                  toast("Deleted goal", {
                    icon: "👏",
                    style: {
                      borderRadius: "10px",
                      background: "#333",
                      color: "#fff",
                    },
                  });
                  
                  dispatch(deleteGoal(goal))}}
                
                colorScheme="red">Delete</Button>
              </ButtonGroup>
            </Box>
          </FormControl>
        ))}
        <Toaster />
    </VStack>
  );
};

export default MyGoals;
