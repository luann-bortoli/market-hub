package io.github.luann.markethub.repository;

import io.github.luann.markethub.model.ProductModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<ProductModel, Long> {
}
