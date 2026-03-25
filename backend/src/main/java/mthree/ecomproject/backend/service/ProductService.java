package mthree.ecomproject.backend.service;

import mthree.ecomproject.backend.model.Product;
import mthree.ecomproject.backend.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository repo;

    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    public List<Product> getProducts(String search, Double minPrice,
                                     Double maxPrice, Double minRating,
                                     List<Long> categories) {

        return repo.findAll().stream()
                .filter(p -> search == null || p.getName().toLowerCase().contains(search.toLowerCase()))
                .filter(p -> minPrice == null || p.getPrice() >= minPrice)
                .filter(p -> maxPrice == null || p.getPrice() <= maxPrice)
                .filter(p -> minRating == null || p.getRating() >= minRating)
                .toList();
    }

    public Product getProductById(Long id) {
        return repo.findById(id).orElseThrow();
    }
}