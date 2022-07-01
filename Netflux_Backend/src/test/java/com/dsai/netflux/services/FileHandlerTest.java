package com.dsai.netflux.services;

import org.junit.jupiter.api.Test;

import java.security.NoSuchAlgorithmException;

class FileHandlerTest {

    @Test
    void generateName() {
        FileHandler fileHandler = new FileHandler();
        try {
            System.out.println(fileHandler.generateName(String.valueOf(1)));
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
    }

    @Test
    void rename() {
        FileHandler fileHandler = new FileHandler();
      String res=  fileHandler.rename("/img/public43DC786660DBE19330F66DE771E4819741DF33A5C35023D4BBA53554FECDB445.jpg","actor_"+1);
        System.out.println(res);
    }
}