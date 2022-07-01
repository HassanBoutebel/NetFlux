package com.dsai.netflux.services;

import com.dsai.netflux.exceptions.FileNotAnImageException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

@Service
public class FileHandler {
    String directory = "./public";
    String imgDirectory = directory + "/img/";

    public String saveFile(MultipartFile file, String fileNameSeed) throws IOException, NoSuchAlgorithmException {

        if (ImageIO.read(file.getInputStream()) == null) {
            throw new FileNotAnImageException(file.getOriginalFilename());
        }
        String fileName = generateName(fileNameSeed);
        Path filePath = Paths.get(imgDirectory + fileName);
        try (InputStream inputStream = file.getInputStream()) {
            Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
            return "/img/" + fileName;
        } catch (IOException ex) {
            throw new IOException("Could not upload image, make sure it is a valid one", ex);
        }
    }

    public String generateName(String seed) throws NoSuchAlgorithmException {
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        byte[] messageDigest = md.digest(seed.getBytes());
        StringBuilder fileName = new StringBuilder();
        for (byte b : messageDigest) fileName.append(Integer.toHexString(0xFF & b));
        return fileName.toString().toUpperCase() + ".jpg";

    }

    public boolean delete(String fileName) {
        return (new File(directory + fileName)).delete();

    }

    public String rename(String oldName, String newSeed) {
        String newName = null;
        try {
            newName = generateName(newSeed);
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        if ((new File(directory + oldName)).renameTo(new File(imgDirectory + newName))) {

            return "/img/" + newName;
        }
        return null;
    }
}
