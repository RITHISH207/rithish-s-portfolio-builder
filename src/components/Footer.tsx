const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} <span className="text-gradient font-medium">Rithish</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
