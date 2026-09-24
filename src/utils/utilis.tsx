

export const formatProductName = (name: string) => {
    return name.length > 12
        ? `${name.substring(0, 12)}...`
        : name;
};