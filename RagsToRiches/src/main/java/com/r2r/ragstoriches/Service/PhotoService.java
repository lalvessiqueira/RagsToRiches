package com.r2r.ragstoriches.Service;
import com.r2r.ragstoriches.Entity.Photo;
import com.r2r.ragstoriches.Repository.PhotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.List;

@Service
public class PhotoService {

    @Autowired
    private PhotoRepository photoRepo;

    public Photo save(@RequestBody Photo imageDTO) {
        return photoRepo.save(imageDTO);
    }

    public Photo getPhoto(String title) {
        return photoRepo.getPhotoByTitle(title);
    }

    public List<Photo> getAllPhotos() {
        return photoRepo.findAll();
    }
}
