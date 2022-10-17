package com.example.mintic.bike.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mintic.bike.model.Category;
import com.example.mintic.bike.repository.RepositoryCategory;

@Service
public class ServiceCategory {
    
    @Autowired
    private RepositoryCategory repositoryCategory;

    
    public List<Category> getAll() {
        return repositoryCategory.getAll();
    }

    public Optional<Category> getCategory(int id) {
        return repositoryCategory.getCategory(id);
    }

    public Category save(Category category) {
        if (category.getId() == null) {
            return repositoryCategory.save(category);
        } else {
            Optional<Category> category1 = repositoryCategory.getCategory(category.getId());
            if (category1.isEmpty()) {
                return repositoryCategory.save(category);
            } else {
                return category;
            }
        }
    }


    public Category update(Category category) {
        if(category.getId()!=null){
            Optional<Category> c1 = repositoryCategory.getCategory(category.getId());
            if(c1.isPresent()){
                if(category.getName()!=null){
                    c1.get().setName(category.getName());
                }
                if(category.getDescription()!=null){
                    c1.get().setDescription(category.getDescription());
                }
                repositoryCategory.save(c1.get());
                return c1.get();
        }else{
            return category;
        }
    }else{
        return category;
    }
    }

    public boolean delete(int id){
        boolean bandera = false;
        Optional<Category> c1 = repositoryCategory.getCategory(id);
        if(c1.isPresent()){
            repositoryCategory.delete(c1.get());
            bandera = true;
        }
        return bandera;
    }

}
