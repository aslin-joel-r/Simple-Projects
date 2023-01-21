import cv2
 
trained=cv2.CascadeClassifier("haarcascade_frontalface_default.XML")
# to link xml file

img=cv2.imread('abdul_kalam.jfif') # read image 

gray =cv2.cvtColor(img,cv2.COLOR_BGR2GRAY) # to covert image to gray

faces=trained.detectMultiScale(gray) # detect face position

print(faces)
i=0;
for x,y,w,h in faces :
	cv2.rectangle(img,(x,y),(x+w,y+h),(255,0,0),3)
	i=i+1
print(i)
pho1=cv2.resize(img,(700,600))
pho2=cv2.resize(gray,(700,600))

cv2.imshow('joel',pho1) # to show image

#cv2.imshow('Gray_image',pho2)

cv2.waitKey() # wait image 