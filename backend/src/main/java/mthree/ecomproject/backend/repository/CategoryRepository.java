package mthree.ecomproject.backend.repository;

import mthree.ecomproject.backend.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}