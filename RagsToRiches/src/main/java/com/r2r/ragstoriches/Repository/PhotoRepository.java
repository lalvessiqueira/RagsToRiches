package com.r2r.ragstoriches.Repository;

import com.r2r.ragstoriches.Entity.Photo;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PhotoRepository extends MongoRepository<Photo, String> {
    Photo getPhotoByTitle(String title);
}
