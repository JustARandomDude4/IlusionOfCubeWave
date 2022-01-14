//Satwi's first math illusion ofa cube wave
let angle=0;
let w=24;
let ma;
let maxD;
let offset;

function setup()
{
  createCanvas(450,450,WEBGL); //webgl to make it 3d
  ma=atan(1/sqrt(2));
  maxD=dist(0,0,300,300);
}

function draw()
{
  background(0);
  ortho(-400,400,-400,400,0,2000);             // gives the orthographic projection
  
  
  rotateX(-QUARTER_PI);
  rotateY(ma);  
  
  for(let z=0;z<height;z+=w)
{
  for(let x=0;x<width;x+=w)
   {
       push();
       let d=dist(x,z,width/2,height/2);
       let offset=map(d,0,maxD,-PI,PI)
       let a=angle+offset;
       let h=floor(map(sin(a),-3,3,0,500));

       translate(x-width/2,0, z-height/2);
       normalMaterial();//allows box to be    affected by light
       box(w-2, h,w-2); 
       pop();
   }
  
       offset -=0.18;
}  
  angle +=0.20;
}