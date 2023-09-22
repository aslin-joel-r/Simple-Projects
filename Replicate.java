import java.awt.Desktop;
import java.io.*;

public class Replicate {
    public static void main(String[] args) {
        try {
            File file = new File("C:\\Aslin's Files\\My coding programs\\java programs\\om.txt");

            if (!file.exists()) {
                // If the file doesn't exist, create it
                file.createNewFile();
                System.out.println("File created: " + file.getAbsolutePath());
            }

            if (!Desktop.isDesktopSupported()) {
                System.out.println("Desktop is not supported.");
                return;
            }

            Desktop desktop = Desktop.getDesktop();

            for (int i = 0; i < 10; i++) { // opens the specified time
                if (file.exists()) {
                    desktop.open(file); // opens the specified file
                } else {
                    System.out.println("File does not exist.");
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
