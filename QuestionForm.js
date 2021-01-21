class QuestionForm {

    constructor(){
        this.optionABtn = createButton(A[count])
        this.optionBBtn = createButton(B[count])
        this.optionCBtn = createButton(C[count])
        this.optionDBtn = createButton(D[count])
    }

   display(){

    this.optionABtn.position(200,300);
    this.optionBBtn.position(400,300);
    this.optionCBtn.position(200,400);
    this.optionDBtn.position(400,400);

    this.optionABtn.mousePressed=(()=>{
        console.log("option A is pressed");
        if(Solution[count]==="A")
        text("That's right!",500,500);
        else
        text("Please try again!",500,500);
      });

      this.optionBBtn.mousePressed=(()=>{
        if(Solution[count]==="B")
        text("That's right!",500,500);
        else
        text("Please try again!",500,500);
      });

      this.optionCBtn.mousePressed=(()=>{
        if(Solution[count]==="C")
        text("That's right!",500,500);
        else
        text("Please try again!",500,500);
      });

      this.optionDBtn.mousePressed=(()=>{
        if(Solution[count]==="D")
        text("That's right!",500,500);
        else
        text("Please try again!",500,500);
      });
   }



}