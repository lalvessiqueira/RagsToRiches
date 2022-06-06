package com.r2r.ragstoriches.Controller;

import com.r2r.ragstoriches.Entity.Photo;
import com.r2r.ragstoriches.Repository.PhotoRepository;
import com.r2r.ragstoriches.Service.PhotoService;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

@CrossOrigin("*")
@RestController
public class PhotoController {
    @Autowired
    private PhotoService photoService;

    @GetMapping("/photos")
    public List<Photo> getAllPhotos() {
        return photoService.getAllPhotos();
    }

    @PostMapping( "/image/add")
    public Photo uploadFile(@RequestBody Photo imageDTO) {
        return photoService.save(imageDTO);
    }

    @GetMapping("/image/get/{title}")
    public Photo retrieveFileByTitle(@PathVariable String title) {
        return photoService.getPhoto(title);
    }

}
